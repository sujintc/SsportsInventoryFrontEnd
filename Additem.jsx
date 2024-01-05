// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// 

// const AddItem = () => {
    
//     const { register } = useForm();

//     const handleSubmit = event => {
//         event.preventDefault();
//         const name = event.target.name.value;
//         const image = event.target.image.value;
//         const description = event.target.description.value;
//         const price = event.target.price.value;
//         const quantity = event.target.quantity.value;
        

//         const product = { name, image, description, price, quantity };

//         // Send data to server

//         // await axios.post("https://localhost:4000/api/product");
//         // .then((res)=>{
//         //     setEmpData(res.data.data)
//         //     setMessage(res.data.message)
//         // })
        

//         fetch('http://localhost:4000/api/product', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(product)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 toast('New Item Succesfully Inserted', result);
//             })

//         // // Count users entry
//         // axios.post('https://warehouse-management-jdvj.onrender.com/user-entry', product)
//         //     .then(response => {
//         //         console.log('Entry Successful', response);
//         //         event.target.reset();
//         //     })

//     };
//     return (
//         <div className='mb-5' >
//             <form className='mt-5' onSubmit={handleSubmit}>
//                 <input className='mb-3 w-50' {...register("name")} placeholder='Product name' required /> <br />

//                 <input className='mb-3 w-50' {...register("img")} placeholder='Image Link' required /> <br />




                

//                 <input style={{ height: 'calc(2.5em + 4.75rem + 2px)' }} className='mb-3 w-50' {...register("description")} placeholder='Description' required /><br />

//                 <input className='mb-3 w-50' type="number" {...register("price")} placeholder="Price" /> <br />

//                 <input className='mb-3 w-50' type="number" {...register("quantity")} placeholder="Quantity" required /> <br />
//                 <input style={{width:"350px"}} className='btn btn-dark' type="submit" />
//             </form>
//         </div>
//     );
// };

// export default AddItem;





import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import "./Additem.css"
import { useNavigate } from 'react-router-dom';




const AddItem = () => {
    const navigate = useNavigate();
    const { register } = useForm();
    

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        

        const product = { name, image, description, price, quantity };

        // Send data to server

        // await axios.post("https://localhost:4000/api/product");
        // .then((res)=>{
        //     setEmpData(res.data.data)
        //     setMessage(res.data.message)
        // })
        

        fetch('https://ssportsstorebackend.onrender.com/api/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res =>{
                event.target.name.value=''
                event.target.image.value=''
                event.target.description.value=''
                event.target.price.value=''
                event.target.quantity.value=''
                
                res.json()})
            .then(result => {
                toast('New Item Succesfully Inserted', result);
            })

        // // Count users entry
        // axios.post('https://warehouse-management-jdvj.onrender.com/user-entry', product)
        //     .then(response => {
        //         console.log('Entry Successful', response);
        //         event.target.reset();
        //     })
       


     
    };

    const move = () => {
        navigate('/Manageitem');
    }

    return (
        <div>
        <div className='mb-5'>
            <form className='mt-5' onSubmit={handleSubmit}>
                <input style={{borderWidth:"5px",borderColor:"black"}} className='mb-3 w-50' {...register("name")} placeholder='Enter the Name of the Product' required /> <br />

                <input  style={{borderWidth:"5px",borderColor:"black"}} className='mb-3 w-50' {...register("image")} placeholder='Enter the Image Link' required /> <br />

                <input style={{ height: 'calc(2.5em + 4.75rem + 2px)',borderWidth:"5px",borderColor:"black" }} className='mb-3 w-50' {...register("description")} placeholder='About the Gadget' required /><br />

                <input  style={{borderWidth:"5px",borderColor:"black"}}className='mb-3 w-50' type="number" {...register("price")} placeholder="Price of one Item" /> <br />

                <input  style={{borderWidth:"5px",borderColor:"black"}} className='mb-3 w-50' type="number" {...register("quantity")} placeholder="Number of items in stock" required /> <br />
                <input style={{width:"200px"}}   className='btn btn-dark' type="submit" /> <br /><br />



                <button onClick={move} className='btn btn-success'>Back to Inventory Page</button>
            </form>

            
        </div>
        
        </div>
        
    );
};

export default AddItem; 
