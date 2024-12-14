import { EVENTS_PROJECTS } from "../constants";

const Events = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto border-b-2" id="theBlog">
        <div className="mb-20">
          <h2 className="text-xl lg:text-5xl tracking-tight text-center mt-20 mb-12">
            بلاگ
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS_PROJECTS.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-3xl mx-4"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                  <h3 className="mb-2 text-xl font-medium text-white">
                    {event.name}
                  </h3>
                  <p className="mb-12 p-4 text-white">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
