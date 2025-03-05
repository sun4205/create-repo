const {values, handleChange} = useForm({
  name:"",
  imageUrl:"",
  weather:"",
})

const handleSubmit = (e) =>{
  e.preventDefault();
  handleAddItemSubmit(values);
}

function asyncSubmit(request){
  setIsLoading(true);
  request()
  .then(closeActiveModal)
  .catch(console.error)
  .fianlly(()=>setIsLoading(false));
  
}

const handleAddItemSubmit =(item)=>{
  asyncSubmit(()=>{
    addItem(item).then((newItem)=>{ 
      setClothingItem([newItem, ...clothingItme]);
    })
  })
}

function checkResponse(res) {
  return res.ok?res.json() : Promise.reject(`Error:${res.status}`);
}

function request(url, options){
  return fetch(url,options).then(checkResponse);
}

const addItem = ({name, weather, imageUrl}) => {
  const token = localStorage.getItem('jwt');
  return request(`${baseUrl}/items`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      authorization:`Bearer ${token}`,
    },
    body:JSON.stringify({
      name,
      weather,
      imageUrl,
    })
  })
}