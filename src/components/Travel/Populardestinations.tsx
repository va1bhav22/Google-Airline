const Populardestinations = () => {
  // fetch(

  // );

  return <div>Populardestinations</div>;
};
export async function getStaticProps() {
  // Fetch data from an API or any data source
  const response = await fetch(
    `https://travelimpactmodel.googleapis.com/v1/flights:computeFlightEmissions?key=AIzaSyB_u5cDhQgCxTadFs8cvwkbhWEC-YsbjPU`
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default Populardestinations;
