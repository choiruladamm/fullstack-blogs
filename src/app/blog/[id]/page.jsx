import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Hey Yoooo</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, Omnis rerum nemo harum, quis expedita officiis
            vitae nobis consequatur corporis veniam aut illo, unde qui
            blanditiis vero totam. Ea quod quidem iste natus distinctio,
            asperiores reprehenderit, magnam, velit vitae nesciunt sed?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
              width="40"
              height="40"
              alt=""
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1686070166401-bdf39d2d774b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          recusandae sed at suscipit aut reprehenderit eligendi modi temporibus
          distinctio facere dolores fugit consequatur repudiandae nesciunt,
          ratione nam delectus placeat sit inventore cum quia est cupiditate!
          Velit nam repellat ut facere vitae enim non fuga illo, suscipit
          doloribus magnam sed deserunt!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
