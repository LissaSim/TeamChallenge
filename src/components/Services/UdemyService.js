
class UdemyService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getPopularCourses = async (offset) => {
        const res = await this.getResource(
            "http://localhost:8080/fs2s/roadmaps/courses-info/hot"
        );

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
}

export default UdemyService;

