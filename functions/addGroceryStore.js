import connectDb from "./connectDb.js";

export const getGroceryStores = async (req, res) => {
  if (!req.body || !req.body.name) {
    res.status(401).send("Invalid Request");
    return;
  }

  const db = connectDb(); // getting the database}

  const newGroceryStore = {
    name: "Fresh Market",
    address: "100 W Camino Real, Boca Raton, FL 33432",
    rating: 4.2,
  };

  // but if I wanted to create a more modular function, the code below does this:
  // const newGroceryStore = {
  //     name: req.body.name
  //     address: req.body.address
  //     rating: req.body.rating
  //     acceptsApplePay: req.body.acceptsApplePay
  // }

  try {
    const doc = await db.collection("groceryStores").add(newGroceryStore);
    res.status(201).send("Grocery store added" + doc.id);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const getAllGroceryStores = async (req, res) => {
    const db = connectDb();

    try {
        const snapshot = await db.collection('groceryStores').get(); // this gives you all the documents
        const groceryStoresArray = snapshot.docs.map((doc) => { // snapshot take a pic of all the docs 
            let grocery = doc.data(); // this is an object returned 
            grocery.id = doc.id; // add id to store which is iin the object
            return grocery; // return grocery store
        });
        res.send(groceryStoresArray);
    } catch (error) {
        res.status(500).send(error)
    }
};