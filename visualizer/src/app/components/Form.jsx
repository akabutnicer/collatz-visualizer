"use client";
import Image  from "next/image"
import Form from 'next/form'


export default function Form_({ submit}) {
   
    return (
        <>
           <Form action="/" onSubmit={(_) => submit(_)}>
               <input type="number" name="integer" class="integer-form"></input>
           </Form>
        </>
    )
}