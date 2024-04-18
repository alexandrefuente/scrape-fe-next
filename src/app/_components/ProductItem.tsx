import Image from "next/image";
import { Product } from "../products/page";

export default function ProductItem({
  title, description, price, image
}: Product) {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-white p-2">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{`${description.substring(0, 60)}...`}</p>
        </div>
        <div>
          <p>${price}</p>
        </div>
        <div>
          <Image src={image} alt={title} height={40} width={60} />
        </div>
      </div>
    </>
  )
}