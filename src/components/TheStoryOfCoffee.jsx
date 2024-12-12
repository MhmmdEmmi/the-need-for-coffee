import TheCoffeeCollective03 from "../assets/images/TheCoffeeCollective03.webp";

const TheStoryOfCoffee = () => {
  return (
    <>
      <section
        className="max-w-7xl mx-auto border-b-2 mt-20"
        id="theStoryOfCoffee"
      >
        <h2 className="text-xl lg:text-3xl tracking-tight text-center mb-12 mx-4">
          داستان قهوه
        </h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
          <div className="mb-8 lg:mb-0">
            <img
              src={TheCoffeeCollective03}
              alt="The Story of the Coffee"
              className="w-full h-auto"
            />
          </div>
          <p
            className="text-lg lg:text-3xl font-light text-center lg:text-right
          max-w-5xl mx-auto mt-8"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
      </section>
    </>
  );
};

export default TheStoryOfCoffee;
