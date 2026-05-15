


export const userLogin = async (email: string, password: string)=>{
    try{
        const response = await fetch("/api/user",{
            method: "POST",
            body: JSON.stringify({ email, password })
        })
        return response.json();
    }
    catch(error){
        console.error('Error logging in:', error);
        throw error;
    }
}


