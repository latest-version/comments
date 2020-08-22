import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 6:00 PM" avatar={faker.image.avatar()} content="Nice blog post!!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 6:00 PM" avatar={faker.image.avatar()} content="Nice blog post!!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 6:00 PM" avatar={faker.image.avatar()} content="Nice blog post!!"/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));