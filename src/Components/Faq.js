import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: 1,
    question: "How does the AI assistant help me browse products?",
    answer:
      "The AI assistant allows you to easily navigate the site by responding to commands like 'Show me all products.' When you ask this, the front page will update to display all available products, helping you browse effortlessly without needing to click through menus.",
  },
  {
    id: 2,
    question: "How can I explore a single product using the AI assistant?",
    answer:
      "You can easily explore any single product by typing its name into the chatbox. Simply write the name of the product you want to see, and the AI assistant will instantly display the details on the front page.",
  },
  {
    id: 3,
    question: "Can I use this website like a normal eCommerce site?",
    answer:
      "Yes, you absolutely can! While the AI assistant is available to enhance your shopping experience, you can still browse, search, and purchase products just like on any other eCommerce website, using the navigation menus and buttons.",
  },

  // More questions...
];

export default function Faq() {
  return (
    <div className="p-8 mt-8">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
        <h2 className="text-xl text-[#444444] text-center font-bold mb-4">
          Frequently asked questions
        </h2>
        <dl className="space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.id} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
