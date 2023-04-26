import Image from 'next/image';

const SinglePage = ({data}) => {
    return (
        <div>
            <Image src={data.image} width={100} height={100} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
        
    );
};

export default SinglePage;

export async function getStaticPaths() {
    const data = await import('/data/data.json');
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path) => {
        return {
            params:{
                category: path.city,
                id: path.id
            }
        }
    });
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const {allEvents} = await import('/data/data.json');
    const id = context.params.id;
    const eventData = allEvents.find((ev) => (
        id === ev.id
    ));
    return {
        props: {data: eventData},
    };
}