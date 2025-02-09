import Image from "next/image";
import Form from "./components/Form";
export default function Home() {
  const submit = (_) => {
        _.preventDefault();
        const { integer } = Object.fromEntries(new FormData(_.target));
  };
  return (
    <>
       <Form onSubmit={submit} />
    </>
  )
}
