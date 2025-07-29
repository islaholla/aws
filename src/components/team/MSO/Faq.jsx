import  { useState } from "react"
import Heading from "../../common/heading/Heading"

const faqData = [
  {
    id: 1,
    question: "What is MSO (Managed Service Operations)?",
    answer: "Managed Service Operations or MSO is a service from Mastersystem focused on active real-time monitoring, management, and ensuring your infrastructure runs optimally 24/7. It focuses on AWS products and includes notifications, consultations, implementation of AWS best practices, as well as inventory reports with analysis."
  },
  {
    id: 2,
    question: "What is the difference between CORE and Service Engineering?",
    answer: "CORE is a 24/7 team of certified engineers that provides essential services such as real-time monitoring and alerting using AWS technologies, along with standard reporting. Service Engineering refers to certified professionals who assist you with services such as incident management and resolution, security compliance checks, backup and recovery oversight, cost optimization, single point of contact, self-service portal, and analysis and evaluation reporting."
  },
  {
    id: 3,
    question: "Can I use Service Engineering without CORE?",
    answer: "No. CORE is the foundation of our MSO service. You must subscribe to CORE before using Service Engineering."
  },
  {
    id: 4,
    question: "How long does MSO onboarding take?",
    answer: "Onboarding typically takes 1-2 weeks depending on the system's complexity. This includes workshops, ITSM activation, and monitoring setup."
  },
  {
    id: 5,
    question: "Can I select only the services I need?",
    answer: "Yes. We use a tiering model for Service Engineering, allowing you to choose based on your needs and scale of work."
  },
  {
    id: 6,
    question: "Is the MSO service available 24/7?",
    answer: "Yes. CORE provides 24/7 monitoring and alerting. Support and engineering are adjusted based on the SLA and tier you choose."
  },
  {
    id: 7,
    question: "Does MSO support multi-cloud or hybrid environments?",
    answer: "No. We only monitor and manage workloads on AWS."
  },
  {
    id: 8,
    question: "Can I view performance and security reports?",
    answer: "Yes. You will receive standard reports through CORE and more detailed reports from Service Engineering, including utilization, ticketing, and security recommendations."
  },
  {
    id: 9,
    question: "Are there any hidden fees?",
    answer: "No. All costs are clearly stated upfront. Any additional hours for Service Engineering will be transparently communicated."
  },
  {
    id: 10,
    question: "What if my needs increase during the contract period?",
    answer: "You can upgrade your Service Engineering tier or top up work hours anytime during the contract."
  },
  {
    id: 11,
    question: "If I only need monitoring services, which option is right for me?",
    answer: "If your needs are limited to infrastructure monitoring, alert notifications, and standard reporting, then CORE is the most suitable service. CORE includes 24/7 real-time monitoring using native AWS technologies, automatic notifications via email/SNS, and regular reports on performance, inventory, and incidents. This service is ideal for customers who do not yet require advanced technical intervention."
  },
  {
    id: 12,
    question: "If I experience system issues or want to make configuration changes in AWS, which service can help me?",
    answer: "If you need assistance with technical issues, reconfigurations, migrations, or AWS system optimization, Service Engineering is the right fit. This service provides certified engineering support for troubleshooting, implementation, assessment, and security improvements."
  }
]

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="faq-item shadow">
      <div 
        className="faq-question" 
        onClick={onToggle}
        style={{
          padding: '20px',
          cursor: 'pointer',
          borderBottom: isOpen ? '1px solid #eee' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8f9fa',
          transition: 'all 0.3s ease'
        }}
      >
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
          {faq.question}
        </h3>
        <span 
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          +
        </span>
      </div>
      
      <div 
        className="faq-answer"
        style={{
          maxHeight: isOpen ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          backgroundColor: '#fff'
        }}
      >
        <div style={{ padding: isOpen ? '20px' : '0 20px' }}>
          <p style={{ 
            margin: 0, 
            lineHeight: '1.6',
            color: '#666',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const Faq = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading 
            subtitle='FREQUENTLY ASKED QUESTIONS' 
            title='MSO Service Information' 
          />
          <div className='faq-container' style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openItems[faq.id]}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq