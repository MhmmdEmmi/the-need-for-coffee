import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
          <div className="grid grid-cols-3 gap-5 mb-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="از صفحه فیس بوک ما دیدن کنید"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="از صفحه توئیتر ما دیدن کنید"
            >
              <RiTwitterFill />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="از صفحه اینستاگرام ما دیدن کنید"
            >
              <RiInstagramFill />
            </a>
          </div>
          <p className="text-sm">
            &copy; 1403 محمدامامـی. تمامی حقوق محفوظ است.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
