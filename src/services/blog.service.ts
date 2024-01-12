import axios from "axios";

type TBlog = {
    title: string;
    description: string;
    image: string;
};

export const getBlogs = async () => {
    const blogs = await axios.get("http://localhost:5000/api/v1/blogs");
    return blogs;
};

export const postBlog = async (data: TBlog, token: string) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/blogs/add", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        return error;
    }
};

export const deleteBlog = async (id: number, token: string) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/blogs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("error deleteblog:", error);
        return error;
    }
};
