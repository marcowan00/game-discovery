import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  limit: number;
  children: string;
}

const ExpandableText = ({ limit, children: text }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  if (text.length <= limit) return <Text>{text}</Text>;

  const truncatedText = text.substring(0, limit) + "...";

  return (
    <Text>
      {expanded ? text : truncatedText}
      <Button
        marginLeft={1}
        fontWeight="bold"
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
