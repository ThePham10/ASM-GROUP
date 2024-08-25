import NavBar from '../components/NavBar';
import GroupHeaderBox from '../components/GroupHeaderBox';
import { modelgroups } from "../model/GroupModel";
import AboutUsBox from '../components/AboutUsBox';

const AboutUsPage = ({ groupID }) => {
    const group = modelgroups.find((group) => group.id === groupID);

    if (!group) {
        return <div>Group not found</div>;
    }

  return (
    <div style={{ background: '#B9D9DC' }}>
      <NavBar />
      <GroupHeaderBox groupID={groupID} /> {/* Assigning the id prop to GroupHeaderBox */}
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-3"></div>
        <div className="col-span-6">
          <div className="mb-4"></div>
            <AboutUsBox groupID={groupID} />
        </div>
        <div className="col-span-3"> </div>
      </div>
    </div>
  );
};

export default AboutUsPage;