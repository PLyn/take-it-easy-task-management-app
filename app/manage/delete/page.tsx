import DeleteForm from "../../../components/CRUD/DeleteForm";
//TODO use context instead of search Params
export default function Home({ searchParams }: any) {
  return (
    <div>
      <DeleteForm data={searchParams.data} />
    </div>
  );
}
