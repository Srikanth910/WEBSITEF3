import axios from 'axios';

const API_URL='https://f3-api.jaqk.in';

axios.defaults.withCredentials = true; 

export const Login = user => {
    return axios
      .post(`${API_URL}/api/login`, {
      
        username: user.username,
        password: user.password,

      

      })
      .then(res => {
        
       
        
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  };

  export const Register =  data=> {
    return axios
      .post(`${API_URL}/api/register`,  {
      username:data.username,
      email:data.email,
      password:data.password,
      gender:data.gender,
      currency:data.currency,
      country:data.country,
      state:data.state,
      city:data.city,
      pincode:data.pincode,
      first_name:data.first_name,
      last_name:data.last_name,

      date_of_birth:data.date_of_birth,
      phone_number:data.phone_number,
      address:data.address,
      



      })
      .then(response => {
       
        return response
      })
      .catch(err => {
        console.log(err)
      })
  };

  
   export const Getdata=()=>{
      
     return	axios.
     get(`${API_URL}/api/profile`).
     then(res=>{
       
       return res.data;
     }).catch(err=>{
       console.log('error',err)
     })
		
     
    
   };

  export const Profiledata =  userdata=> {
    return axios
      .post(`${API_URL}/api/profile`,{}, {
       firstName:userdata.firstName,
			 lastName:userdata.lastName,
			 dateOfBirth :userdata.dateOfBirth,
			 email:userdata.email,
		
			 gender:userdata.gender,
			 state:userdata.state,
			 phone:userdata.phone,
			 city:userdata.city,
			 country:userdata.country,
			 addressLine:userdata.addressLine 

      })
      .then(response => {
       
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  };


 export const Updateprofile= userdata =>{
   return axios.
   post(  `${API_URL}/api/profile`,{
    first_name:userdata.first_name,
    last_name:userdata.last_name,
    date_of_birth :userdata.date_of_birth,
   
    state:userdata.state,
    gender:userdata.gender,
    currency:userdata.currency,
    pincode:userdata.pincode,
    phone_number:userdata.phone_number,
    city:userdata.city,
    country:userdata.country,
    address:userdata.address

   }).
   then(resp=>{
     return resp.data
   }).catch(err=>{
      console.log('err',err)
   })
 };
  

   
  export const Logout = ()=> {
    

    return axios.
    post(`${API_URL}/api/logout`, {})
    .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  };

 
   
  


  export const GameToken =()=>{
    return axios.
    get(`${API_URL}/api/token`,{}).
    then (response=>{
      return response.data
    }).catch(err=>{
      console.log(err)
    })
  };



  export const Balance= ()=>{
    return axios.
    get(`${API_URL}/api/balance`).
    then(response=>{
       return response.data
    }).catch(err=>{
      console.log('err',err)
    })
  };
   
  export const UploadedKyc=()=>{
  return axios.post(`${API_URL}/web/upload-kyc`).
  then (kycdocus=>{
    return kycdocus;
  }).catch(err=>console.log('err',err))
    
  }

  export const  GetkycDocuments=()=>{
    return axios.get(`${API_URL}/api/kyc`).
    then(resp=>resp).
    catch(err=>console.log('eror',err))
  }
  



  export const passwordChange=(userpasswords)=>{
    return axios.post(`${API_URL}/api/change-passwd`,{
      old_password:userpasswords.old_password,
      new_password:userpasswords.new_password,
    }).
    then(Responce=>{
      return Responce.data;
    }).catch(error=>console.log('password',error))

  }

   export const GenerateroomIds=()=>{
     return axios.get(`${API_URL}/api/rooms`).
     then(rep=>{
       return rep;
     }).catch(error=>console.log('error',error))
   }