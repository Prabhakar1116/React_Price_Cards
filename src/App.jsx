import React from 'react';
import Cards from './cards/cards';


const App = () => {

  // js part

  const data =[
      {
          title:"Free",
          price: "$0/month",
          user:"Single User",
          storage: "50GB Storage",
          project:"Unlimited Public Project",
          access:"Community Access",
          private: "Unlimited Private Project",
          private_icon: "fa-solid fa-xmark",
          support: "Dedicated Phone Support",
          support_icon:"fa-solid fa-xmark",
          domain: "Free Subdomain",
          domain_icon:"fa-solid fa-xmark",
          report: "Monthly Status Reports",
          report_icon:"fa-solid fa-xmark",
          pro_icon: "fa-solid fa-check",
          t_icon: "text-muted",
          x_mark: "fa-solid fa-xmark"
      },
      {
          title:"Plus",
          price: "$9/month",
          user:"5 Users",
          storage: "50GB Storage",
          project:"Unlimited Public Project",
          access:"Community Access",
          private: "Unlimited Private Project",
          private_icon: "fas fa-check",
          support: "Dedicated Phone Support",
          support_icon: "fas fa-check",
          domain: "Free Subdomain",
          domain_icon: "fas fa-check",
          report: "Monthly Status Reports",
          report_icon:"fa-solid fa-xmark",
          pro_icon: "fa-solid fa-check",
          t_icon: "text-muted",
          x_mark: "fa-solid fa-xmark"
      },
      {
          title:"Pro",
          price: "$49/month",
          user:"Unlimited Users",
          storage: "50GB Storage",
          project:"Unlimited Public Project",
          access:"Community Access",
          private: "Unlimited Private Project",
          private_icon: "fas fa-check",
          support: "Dedicated Phone Support",
          support_icon: "fas fa-check",
          domain: "Free Subdomain",
          domain_icon: "fas fa-check",
          report: "Monthly Status Reports",
          report_icon:"fas fa-check",
          pro_icon: "fa-solid fa-check"
      }
  ]
  return (
      <div className="App">
      <section className="pricing py-5 bg-primary">
        <div className="container">
          <div className="row">
            {
              data.map((element, index) => {
                return <Cards cardData={element} key={index} />
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
