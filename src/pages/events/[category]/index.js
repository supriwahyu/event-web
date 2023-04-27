import Image from 'next/image'
import Link from 'next/link';

const EventsCategoryPage = ({data, pageName}) => {
    return (
        <div className='home_body'>
        <h1> Event {pageName} </h1>
        <div>
        {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} legacyBehavior>
            <a className= 'card'>
            <div className='image'>
                <Image width={500} height={300} src={ev.image} />
            </div>
            <div className='content'>
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
            </a>
            </Link>
        ))}
        </div>
        </div>
    )
};

export default EventsCategoryPage;

export async function getStaticPaths() {
    const {events_categories} = await import('/data/data.json');
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                category: ev.id.toString(),
            },
        };
    });
    // console.log(allPaths);
    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context?.params.category;
    const {allEvents} = await import('/data/data.json');
    
    const data = allEvents.filter((ev) => ev.city === id);
    // console.log(data);

    return {props: {data, pageName: id}};
}
