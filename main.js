async function getPromise() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await response.json();
  
      data.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "box";
  
        const id = document.createElement("p");
        id.textContent =  item.id;
        box.appendChild(id);
  

  
        const price = document.createElement("p");
        price.textContent = item.name;
        box.appendChild(price);
  
        const description = document.createElement("p");
        description.textContent = item.email;
        box.appendChild(description);
  
        const category = document.createElement("p");
        category.textContent = item.body;
        box.appendChild(category);
    
        document.body.appendChild(box);
 
      });

    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  
  getPromise();
  