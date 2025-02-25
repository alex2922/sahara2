export const getTestimonials = async () => {
    try {
        const response = await fetch("https://www.vps.diwiseglobal.com/saharaAmmusment/testemonials/GetAll" ,{ method : "GET"});
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};