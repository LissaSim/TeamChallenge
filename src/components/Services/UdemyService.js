import {useHttp} from "../../hooks/http.hook.js";
const useUdemyService  = () => {
    const {loading, request, error, clearError} = useHttp();

   // const getResource = async (url) => {
   //      let res = await fetch(url);
   //
   //      if (!res.ok) {
   //          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
   //      }
   //
   //      return await res.json();
   //  };

   const getPopularCourses = async (offset) => {
        const res = await request( "http://localhost:8080/fs2s/roadmaps/courses-info/hot")

       let resArray =  Object.entries(res).map(([id,item]) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            avgRate: parseFloat(item.avgRate).toFixed(1),
            img: item.imageUrl_480x270
        }));

        let visible =  resArray.slice(0,5);
        let loadingCourses = resArray.slice(5,10);

        const content = offset ? loadingCourses : visible;
        return content
    };

   const getCourseById = async (id) => {
        const res = await request(`http://localhost:8080/fs2s/roadmaps/courses-info/${id}`)

        const resObj = {
            id: res.id,
            title: res.title,
            price: res.price,
            discountPrice: res.discountPrice,
            avgRate: parseFloat(res.avgRate).toFixed(1),
            img: res.imageUrl_480x270,
            headline: res.headline,
            courseUrl: "https://www.udemy.com" + res.courseURL,
            locale: res.locale,
            reviews: res.reviews,
            courseLevel: res.courseLevel,
            lecturesDuration: res.lecturesDuration,
            enrolledStudents: Math.floor(res.enrolledStudents / 1000) * 1000,
            quizzesAmount: res.quizzesAmount,
            hasCertificate: res.hasCertificate,
            description: res.description,
            requirements: res.requirements.map(item => item)
        };

        return resObj;
    }

   const getLectures = async (id) => {
        const res = await request(`http://localhost:8080/fs2s/roadmaps/courses-info/${id}/lectures`)
        const lectures = res.map((item) => ({
            title: item.title,
            created: item.created,
            description: item.description,
            duration: item.duration
        }));
        return lectures
    }

   const getReviews = async (id) => {
        const res = await request(`http://localhost:8080/fs2s/roadmaps/courses-info/${id}/reviews`)
        const reviews = res.map((item) => ({
            rate: item.rate,
            content: item.content,
            createdAt: item.createdAt,
            author: item.author
        }));
        return reviews
    }
    return {loading, error, getPopularCourses, getCourseById, clearError, getLectures, getReviews}
}

export default useUdemyService;

