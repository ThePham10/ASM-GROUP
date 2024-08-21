import GroupHeaderBox from '../components/UI/GroupHeaderBox';
import TopBarBox from '../components/UI/TopBarBox';
import PostingBox from '../components/UI/PostingBox';
import PostBox from '../components/UI/PostBox';

export default function Group() {
    const groups = [
        {
            name: 'RMIT Society',
            status: 'Public',
            members: 100,
            introduction: 'This is a group for RMIT students to share their thoughts and ideas.'
        },
        {
            name: 'RMIT MarketPlace',
            status: 'Private',
            members: 50,
            introduction: 'This is a group for RMIT students to buy and sell their merchandises.'
        },
        {
            name: 'RMIT SSETS',
            status: 'Public',
            members: 1250,
            introduction: 'This is a group for RMIT students to share their thoughts and ideas about Tech.'
        }
    ];

    const account = {
        firstName: 'Thanh The',
        groups: groups,
    };

    return(
        <div style={{ height: '100vh', overflow: 'auto', backgroundColor: 'black' }}>
            <div className="container1">
                <header className="topBarName">
                    <TopBarBox
                        account={account}
                    />
                </header>
            </div>

            <div className="container2">
                <header className="groupHeader">
                    <GroupHeaderBox
                        account={account}
                        groups={groups}
                    />
                </header>
            </div>

            <div className="container3">
                <header className="postingBox">
                    <PostingBox
                        account={account}
                    />
                </header>
            </div>

            <div className="container4">
                <header className="postBox">
                    <PostBox
                        account={account}
                    />
                </header>
            </div>

            <div className="container5">
                <header className="postBox">
                    <PostBox
                        account={account}
                    />
                </header>
            </div>
        </div>
    );
}
