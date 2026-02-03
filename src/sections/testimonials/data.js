import Lyft from "../../assets/Lyft.png";
import UCSB from "../../assets/UCSB.png";
import WCG from "../../assets/WCG.png";

const resumeData = {
  education: [
    {
      institution: "UC Santa Barbara",
      image: UCSB,
      year: "2015 - 2019",
      qualification: "Diploma in ICT: Applications Development",
    }
  ],
  experience: [
    {
      company: "Lyft",
      image: Lyft,
      position: "Senior Software Engineer, ML Platform",
      year: "Apr 2023 - Present",
      description:
        "• Built AI Assistant Platform for querying domain-specific knowledge using context-augmentation techniques like RAG, powering documentation chatbots and processing thousands of internal daily requests across multiple environments.\n• Led development of a company-wide anomaly detection system that detects both sudden spikes and gradual changes in incident rates, built on Airflow, Fugue and Spark -- seamlessly integrated with LyftLearn's training infrastructure.\n• Led development of Model Monitoring system to track a \"Model Health Score\" based on freshness metrics, query patterns, and key performance indicators.",
    },
    {
      company: "Lyft",
      image: Lyft,
      position: "Software Engineer, ML Platform",
      year: "Apr 2020 - Mar 2023",
      description:
        "• Lead engineer for Lyftlearn: Lyft's ML training infrastructure built on Kubernetes. Lyftlearn enables dozens of teams to develop, train, and deploy machine learning models across critical business functions including dispatch, pricing, fraud detection, and support. Supporting diverse modeling libraries (sklearn, LightGBM, XGBoost, PyTorch, TensorFlow) while leveraging Kubernetes, Spark, and Fugue for distributed training at scale.",
    },
    {
      company: "Lyft",
      image: Lyft,
      position: "Software Engineer Intern",
      year: "Jun 2019 - Sep 2019",
      description:
        "•Designed, implemented, and tested the backend for a new metrics tool used in Lyft’s Machine Learning Platform, which displays and tracks the performance of online ML models over time.",
    },
    {
      company: "InTouch Health",
      image: WCG,
      position: "DevOps Intern",
      year: "Apr 2019 - Jun 2019",
      description:
        "• Improving front-end, and back-end aspects of Device Manager, an InTouch Health tool that serves as interface and REST API for monitoring, managing, and updating medical devices.",
    },
  ],
};

export default resumeData;