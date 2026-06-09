const SingleArticlePage = async ({params}) => {
  const {id} = await params;
  // console.log(ps);

  // data fatch
  return <div>SingleArticlePage:{id}</div>;
};
export default SingleArticlePage;
