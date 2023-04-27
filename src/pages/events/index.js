
import AllEvents from '@/components/events/events-page';

const eventsPage = ({data}) => {
    return (
        <AllEvents data={data}/>
    )
}

export default eventsPage;

export async function getStaticProps() {
  const {events_categories} = await import('/data/data.json');
  // console.log(events_category);
  return {
    props:{
      data: events_categories,
    },
  };
}
