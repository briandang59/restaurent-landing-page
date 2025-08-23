import ChildHeaderPage from "@/components/ChildHeaderPage";
import ContactForm from "@/components/ContactForm";
import Divider from "@/components/Divider";

function Contact() {
  return (
    <div className="pt-[110px]">
      <ChildHeaderPage
        label1="Contact Cafe"
        label2="Regina"
        description="You will always have a good time at Café Regina in Zelzate ! You can enjoy an extensive drinks menu here , but you are also in the right place if you are hungry . You will also find some tasty weekend suggestions here ! So don't hesitate to contact us by telephone or email or just drop by. 
"
        description2="You will also find many other things on this website. Here you will find nice atmospheric photos , a guestbook  with customer responses and a newsletter  so that you can stay informed of the latest news and special offers. "
        labelButton="View Menu"
      />
      <Divider type="without-logo" />
      <div className="mx-auto container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
