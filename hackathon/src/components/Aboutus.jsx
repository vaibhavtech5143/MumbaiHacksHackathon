import vs from "../assets/profiles/vs.jpg";
import rn from "../assets/profiles/rn.jpg";
import st from "../assets/profiles/st.jpg";
import ab from "../assets/profiles/ab.jpg";
const Aboutus = () => {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">About Us</h2>

          <div className="grid gap-x-3 md:grid-cols-4 lg:gap-x-12">
            <div className="mb-3 md:mb-0">
              <div className="mb-6 overflow-hidden flex justify-center">
                <img
                  src={vs}
                  className="w-32 h-40 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold">Vaibhav Singh</h5>
              <h6 className="mb-4 mt-5 font-medium text-primary dark:text-primary-400">
                Full Stack Developer,Bughunter
              </h6>
            </div>
            <div className="mb-3 md:mb-0">
              <div className="mb-6 flex justify-center">
                <img
                  src={rn}
                  className="w-32 h-40 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold"> Raj Nishad</h5>
              <h6 className=" mt-5 mb-4 font-medium text-primary dark:text-primary-400">
                A Full Stack Developer
              </h6>
            </div>
            <div className="mb-3">
              <div className="mb-6 flex justify-center">
                <img
                  src={st}
                  className="w-32 h-40 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold">Shivam Tiwari</h5>
              <h6 className=" mt-5 mb-4 font-medium text-primary dark:text-primary-400">
                Backend Developer
              </h6>
            </div>
            <div className="mb-3">
              <div className="mb-6 flex justify-center">
                <img
                  src={ab}
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
              </div>
              <h5 className="mb-2 text-lg font-bold">Abhishek Singh</h5>
              <h6 className=" mt-5 mb-4 font-medium text-primary dark:text-primary-400">
                Backend Developer
              </h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Aboutus;
