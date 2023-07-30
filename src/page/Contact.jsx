import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import ProfileCard from "../components/ProfileCard";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <Layout>
      <div className="h-[85vh] flex">
        <ProfileCard />
      </div>
    </Layout>
  );
};

export default Contact;
