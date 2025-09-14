# Data Fetching Methods in Next.js

Next.js provides several powerful data-fetching strategies to handle different use cases for rendering web applications. These methods help balance performance, SEO, and real-time data requirements.

---

## 1. `getStaticProps` (Static Site Generation - SSG)

* **What it is:**
  A function used to fetch data **at build time**. Next.js generates the HTML and JSON files during the build process, and then serves them as static pages.

* **When to use:**

  * When the data is **not changing frequently**.
  * For pages where SEO matters (content is pre-rendered).
  * Ideal for blogs, documentation, marketing pages.

* **Example:**

  ```js
  export async function getStaticProps() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  }
  ```

---

## 2. `getServerSideProps` (Server-side Rendering - SSR)

* **What it is:**
  A function that runs **on every request**. It fetches data on the server before rendering the page, ensuring always up-to-date content.

* **When to use:**

  * When the data changes frequently and must always be fresh.
  * For pages that need request-specific data (e.g., user dashboard, search results).

* **Example:**

  ```js
  export async function getServerSideProps(context) {
    const res = await fetch(`https://api.example.com/data?id=${context.query.id}`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  }
  ```

---

## 3. `getStaticPaths` (for Dynamic Routes)

* **What it is:**
  Works together with `getStaticProps` to generate **dynamic routes** at build time.

* **When to use:**

  * When using `getStaticProps` with dynamic pages (e.g., blog posts by ID).
  * It tells Next.js which paths to pre-render.

* **Example:**

  ```js
  export async function getStaticPaths() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => ({
      params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
  }
  ```

---

## 4. Client-side Data Fetching (SWR or React Query)

* **What it is:**
  Instead of fetching data on the server, the page loads first, and then **fetches data on the client**. Libraries like **SWR** or **React Query** make client-side fetching efficient.

* **When to use:**

  * For highly interactive apps where SEO is not a priority.
  * For real-time updates (e.g., chat apps, dashboards).

* **Example with SWR:**

  ```js
  import useSWR from 'swr';

  const fetcher = url => fetch(url).then(res => res.json());

  function Profile() {
    const { data, error } = useSWR('/api/user', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return <div>Hello, {data.name}</div>;
  }
  ```

---

## 🔑 Key Takeaways

* **SSG (`getStaticProps`)** → Best for fast, SEO-friendly, rarely changing content.
* **SSR (`getServerSideProps`)** → Best for always-fresh, request-specific content.
* **Static Paths (`getStaticPaths`)** → Required for dynamic routes with SSG.
* **Client-side Fetching (SWR/React Query)** → Best for real-time, interactive apps.

By combining these methods, Next.js allows developers to build highly optimized apps that balance **performance, SEO, and user experience**.
