import React from 'react';
import CodeSnippet from '../CodeSnippet';

export default (
    <CodeSnippet
        feedback="Feedback Enabled 👍"
        showLessText="Show less"
        showMoreText="Show more"
        type="multi"
        uxpId="CodeSnippet0">
        {`@mixin grid-container {
  width: 100%;
  padding-right: padding(mobile);
  padding-left: padding(mobile);

  @include breakpoint(bp--xs--major) {
    padding-right: padding(xs);
  }
}`}
    </CodeSnippet>
);
