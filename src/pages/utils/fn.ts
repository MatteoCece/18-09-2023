export const HTTP_GET = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Connection refused ->", error);
  }
};
export const HTTP_DELETE = async (endpoint: string, id: number) => {
  try {
    const res = await fetch(endpoint, {
      headers: {
        "Delete-Item": id,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Connection refused ->", error);
  }
};
/*
export const HTTP_POST=async (endpoint:string, body:string){
    try{
        const res = await fetch(endpoint, {
            headers: {
              "Delete-Item": id,
            },
          });
          const data = await res.json();
      
          return data;
    }catch(error){
        console.log("Connection refused ->", error);
    }
}*/
