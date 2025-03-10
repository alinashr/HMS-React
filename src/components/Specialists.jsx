import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Specialists = () => {
  const fakeDoctorsApi = [
    {
      id: 1,
      name: "Dr. John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/028/534/357/non_2x/portrait-of-female-american-doctor-standing-in-hospital-copy-space-generative-ai-free-photo.jpeg",
      specialization: "Cardiology",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      image:
        "https://www.summit-urgentcare.com/wp-content/uploads/2014/12/Dollarphotoclub_69741928.jpg",
      specialization: "Neurology",
    },
    {
      id: 3,
      name: "Dr. Alice Johnson",
      image:
        "https://t4.ftcdn.net/jpg/07/24/75/87/240_F_724758710_R7USYkyrTDDo42YFewVxROnhmyqp1QkS.jpg",
      specialization: "Pediatrics",
    },
    {
      id: 4,
      name: "Dr. Bob Brown",
      image:
        "https://t3.ftcdn.net/jpg/06/64/62/08/240_F_664620894_KN7WA859syQPK6rwNWBSky1iLwYhb3Gt.jpg",
      specialization: "Orthopedics",
    },
    {
      id: 5,
      name: "Dr. Marry Ray",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/038/468/659/small/ai-generated-young-beautiful-female-doctor-standing-smiling-looking-at-camera-against-blurred-hospital-background-free-photo.jpeg",
      specialization: "Gynaecologist",
    },
    {
      id: 6,
      name: "Dr. John Ray",
      image:
        "https://t4.ftcdn.net/jpg/07/24/75/87/240_F_724758710_R7USYkyrTDDo42YFewVxROnhmyqp1QkS.jpg",
      specialization: "Dermatologist",
    },
    {
      id: 7,
      name: "Dr. Arik Ray",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_aWwAzyLKhidpX6WSXEvrUwFZtkG1sZwpQ&s",
      specialization: "Dermatologist",
    },
    {
      id: 8,
      name: "Dr. Jenny Ray",
      image:
        "https://t3.ftcdn.net/jpg/06/64/62/08/240_F_664620894_KN7WA859syQPK6rwNWBSky1iLwYhb3Gt.jpg",
      specialization: "Dermatologist",
    },
  ];

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDoctors(fakeDoctorsApi);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="specialists pt-5">
      <h2 className="mb-4 text-white text-center">Specialists</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        // <div className="flex col-4 bg-amber-800">
        //   {doctors.map((doctor) => (
        //     <div
        //       key={doctor.id}
        //       className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        //     >
        //       <a href="#">
        //         <img
        //           className="rounded-t-lg h-32 w-32 object-cover"
        //           src={doctor.image}
        //           alt=""
        //         />
        //       </a>
        //       <div class="p-5">
        //         <a href="#">
        //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        //             {doctor.name}
        //           </h5>
        //         </a>
        //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        //           {doctor.specialization}
        //         </p>
        //       </div>
        //     </div>
        //     // <div key={doctor.id} className="col-lg-3 col-md-6 col-sm-8 sm:items-center p-4">
        //     //   <div className="card card-specialist specialistCard">
        //     //     <img
        //     //       src={doctor.image}
        //     //       className=" w-100 p-2 "
        //     //       style={{ height: "220px", objectFit: "fill", width:'30px' }}
        //     //       alt={doctor.name}
        //     //     />
        //     //     <div className="card-body">
        //     //       <h5 className="card-title text-center">{doctor.name}</h5>
        //     //       <p className="card-text text-center">
        //     //         <b>Specialization: </b>
        //     //         {doctor.specialization}
        //     //       </p>
        //     //     </div>
        //     //   </div>
        //     //   <hr />
        //     // </div>
        //   ))}
        // </div>
        <div className="container flex justify-center flex-wrap gap-4 p-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="w-70  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-0.5"
            >
              <a href="#">
                <img
                  className="rounded-t-lg h-49 w-100 object-fill"
                  src={doctor.image}
                  alt={doctor.name}
                />
              </a>
              <div className="p-2 text-center">
                <Link to="#" className="!no-underline">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {doctor.name}
                  </h5>
                </Link>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {doctor.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Specialists;
