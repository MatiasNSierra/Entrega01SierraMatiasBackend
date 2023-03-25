class ProductManager {
    #products

    constructor() {
        this.#products = []
       this.id = 1
    }

    #generateID = () => {
        let id

        if (this.#products.length === 0) id = 1

        else id = this.#products[this.#products.length-1].id + 1

        return id
    }

    getProducts = () => {
        return this.#products
    }
    
    getProductById(id) {
        const product = this.#products.find(p => p.id === id);
            if (!product) {
              console.error('NO HAY UN PRODUCTO CON EL ID REQUERIDO');    
            }
            return product;
    }
            


    addEvent = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son requeridos")
            return
        }
        
        let id = this.#generateID()


        let newProduct = {
            id, title, description, price, thumbnail, code, stock

        }
        if (this.#products.some(p => p.code === newProduct.code)) {
            console.error ("Ya existe un producto con ese ID")
            return
         }

        this.#products.push(newProduct);

        

    
    }

}


const productManager = new ProductManager();
productManager.addEvent('Monitor', 'LCD 24 FULL HD', 2000, '/1.jpg', 20, 100)
productManager.addEvent('Teclado', 'Teclado Logitech', 2220, '/1.jpg', 33, 100)
productManager.addEvent('Mouse', 'Mouse Razer', 3333, '/1.jpg', 20, 100)
productManager.addEvent('Auriculares', 'Auris Tech', 1000, '/1.jpg', 31, 100)
productManager.addEvent('Cooler', 'Cooler Light', 2000, '/1.jpg', 12, 100)
console.log(productManager.getProducts())
console.log(productManager.getProductById(6))
