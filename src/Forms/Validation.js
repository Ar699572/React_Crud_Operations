export default function Validation(values){
debugger;
    const errors={}
    if(values.Name===''){
        errors.Name = 'Name is required **'
    }
    if(values.lastName===''){
        errors.lastName = 'lastName is required **'
    }  
    
    if(values.Age===''){
        errors.Age = 'Enter the age is required **'
    }   
if(values.zip===''){
    errors.zip = 'Enter the zip required **'
}

if(values.Password===''){
    errors.Password = 'Enter the Password required **'
}

    return errors;
}