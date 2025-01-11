import DNButton from "./Button";

export default {
  title: "components/button",
  component: DNButton,
  tags: ["!autodocs"],
  //   decorator: [
  //     (Story) => (
  //       <Provider>
  //         {/* 만약 Provider를 사용하고 있는 Story가 존재한다면 decorators를 통해 감싸줘야함. */}
  //         <Story />
  //       </Provider>
  //     ),
  //   ],
  argTypes: {
    size: {
      description: "st",
      control: "select",
      options: ["xSmall", "small", "large"],
    },
    isActive: {
      type: "boolean",
    },
  },
  render: (args) => {
    return <DNButton {...args}>Button</DNButton>;
  },
};

export const Large = {
  args: {
    size: "large",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};
