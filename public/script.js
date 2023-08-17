const generator=async ()=>{
    try {
        let text=document.getElementById('text').value;

        await fetch("/generator", {
            method: "POST",
            body: JSON.stringify({
                text:text
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((data)=> {
           data.json().then((data)=>{
            console.log(data) 
            let image_data=data.image;
            document.getElementById('img').src=image_data;
        })


           
        })
        .catch(err=>{console.log(err)})
        
    } catch (error) {
        console.log(error)
    }
}
