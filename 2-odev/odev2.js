const posts = [
  { name: "test1", value: "test1 value" },
  { name: "test2", value: "test2 value" },
  { name: "test3", value: "test3 value" },
  { name: "test4", value: "test4 value" },
];

const showPost = () => posts.map((post) => console.log(post.value));

const addPosts = (value) => {
  return new Promise((resolve, reject) => {
    if (!value) {
      reject("Lutfen Bir deger giriniz");
    }
    posts.push(value);
    resolve(posts);
  });
};

const newPosts = async () => {
  try {
    await addPosts({ name: "test5", value: "test5 value" });
    showPost();
  } catch (error) {
    console.error(error);
  }
};

newPosts();
