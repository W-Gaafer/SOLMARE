import styles from "./Men.module.css";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

function Men() {
  const URL =
    "https://api.sheety.co/34c39d637eb252932fdba3472fda0ec6/solmare/men";
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  /*
  let url = 'https://api.sheety.co/34c39d637eb252932fdba3472fda0ec6/solmare/men';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.men);
});
  */
  useEffect(() => {
    async function fetchMen() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setProducts(data.men);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMen();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY * 0.2; // الرقم 0.3 ده بيتحكم في السرعة
    };
    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="men" className={styles.section}>
      <p className={styles.bigTitle}>
        For <br></br>him
      </p>

      {/*  جزئية عرض المنتجات على بعضها  */}
      <div className={styles.slider}>
        {/*  الكارت  */}
        {products.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>

      <div className={styles.description}>
        <p className={styles.descTitle}>Men Products</p>
        <p className={styles.descText}>
          A versatile collection of men’s fragrances combining fresh summer
          citrus, clean aquatic notes, aromatic herbs, and warm winter woods.
          Perfect for daily wear or special occasions, blending classic European
          elegance with deep oriental richness to suit every season and style.
        </p>
      </div>
    </section>
  );
}

export default Men;
