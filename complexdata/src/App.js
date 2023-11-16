import NestedData from "./NestedData";

function App() {

  const complexData = {
    
      companyName: "TechCorp",
      location: {
        city: "Silicon Valley",
        country: "USA"
      },
      departments: [
        {
          name: "Engineering",
          head: {
            name: "Alice Johnson",
            position: "VP of Engineering"
          },
          teams: [
            {
              name: "Frontend Team",
              members: [
                { name: "Bob Smith", role: "Frontend Developer" },
                { name: "Eva Rodriguez", role: "UI/UX Designer" }
              ]
            },
            {
              name: "Backend Team",
              members: [
                { name: "Charlie Brown", role: "Backend Developer" },
                { name: "Diana Patel", role: "Database Engineer" }
              ]
            }
          ]
        },
        {
          name: "Marketing",
          head: {
            name: "Michael Williams",
            position: "Chief Marketing Officer"
          },
          teams: [
            {
              name: "Digital Marketing",
              members: [
                { name: "Grace Lee", role: "Digital Marketing Specialist" },
                { name: "Henry Davis", role: "SEO Analyst" }
              ]
            },
            {
              name: "Product Marketing",
              members: [
                { name: "Isabel Martinez", role: "Product Marketing Manager" },
                { name: "Jack Turner", role: "Marketing Copywriter" }
              ]
            }
          ]
        }
      ]
    
    
  };
  return (
    <>
      <NestedData data={complexData}/>
        
    </>
  );
}

export default App;
