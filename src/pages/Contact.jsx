import { MdMailOutline } from "react-icons/md";
import Card from "../ui/Card"
import Button from "../ui/Button"
import PagesTitle from "../components/PagesTitle";

const contact = [
  {
    image: 'https://i.pravatar.cc/500?img=68',
    name: 'Jason Price',
    email: 'kuhlman.jermey@yahoo.com',
  },
  {
    image: 'https://i.pravatar.cc/500?img=59',
    name: 'Duane Dean',
    email: 'rusty.botsford@wilfrid.io',
  },
  {
    image: 'https://i.pravatar.cc/500?img=57',
    name: 'Jonathan Barker',
    email: 'cora_haley@quinn.biz',
  },
  {
    image: 'https://i.pravatar.cc/500?img=33',
    name: 'Rosie Glover',
    email: 'lockman.marques@hotmail.com',
  },
  {
    image: 'https://i.pravatar.cc/500?img=12',
    name: 'Patrick Greer',
    email: 'pearlie.eichmann@trevion.net',
  },
  {
    image: 'https://i.pravatar.cc/500?img=8',
    name: 'Darrell Ortega',
    email: 'chaya.shields@ferry.info',
  },
]

const Contact = () => {
  return (
    <>
      <PagesTitle />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          contact.map((contact, index) => (
            <Card key={index} style={{ backgroundColor: '#fff', display: 'relative', padding: 'none' }}>
              <img src={contact.image} alt='contact image' className="mb-5 w-full" />
              <span className="text-center">
                <p className="text-brand-primary-black font-medium">{contact.name}</p>
                <p className="text-brand-primary-black text-opacity-50 text-[.875rem]">{contact.email}</p>
                <Button classNames={'my-5 mx-auto px-4 py-2 flex items-center gap-2 border border-[#979797] text-[#979797] hover:bg-brand-primary-blue hover:text-white hover:border-brand-primary-blue'}><MdMailOutline /> Message</Button>
              </span>
            </Card>
          ))
        }
      </div>
    </>
  )
}

export default Contact