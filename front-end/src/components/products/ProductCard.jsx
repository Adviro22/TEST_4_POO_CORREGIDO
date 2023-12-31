import { useProducts } from "../../context/ProductContext";
import { Button, ButtonLink, Card } from "../ui";

export function ProductCard({ product }) {
  const { deleteProduct } = useProducts();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{product.nombre}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteProduct(product._id)}>Delete</Button>
          <ButtonLink to={`/product/${product._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300"><span className="text-blue-400 font-bold">Precio:</span> {product.precio}</p>
      <p className="text-slate-300"><span className="text-blue-400 font-bold">Stock:</span>{product.stock}</p>
     
    </Card>
  );
}