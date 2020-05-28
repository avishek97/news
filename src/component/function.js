 const abc=(a)=>(dispatch)=>{
   
fetch(
  `https://newsapi.org/v2/top-headlines?source=google-news&country=${a}&apiKey=a9b320f1f47644f99dab6b9407db90b0`
)
  .then(response => response.json())
  
  .then(json => {
      dispatch(xyz(json))
  })
}

export  const  xyz=(text)=>{
  return{
    type:"fetch",
    text:text
  }
}

export default abc;
