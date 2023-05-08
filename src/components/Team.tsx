import { Box, Title, Center, Text, SimpleGrid } from "@mantine/core";
import Image from "next/image";

interface MemberProps {
  imgUrl: string;
  name: string;
  designation: string;
}

export function Team({ members }: { members: MemberProps[] }) {
  return (
    <Box>
      <Title order={2} mb={20} align="center">
        Our Team
      </Title>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam aliquam
        facere adipisci ab similique, accusantium numquam molestiae corporis
        corrupti in magni ut, cum libero voluptas rerum perferendis iusto dolore
        deleniti.
      </Text>
      <SimpleGrid cols={2}>
        {members.map((member) => (
          <Member
            key={member.imgUrl}
            imgUrl={member.imgUrl}
            name={member.name}
            designation={member.designation}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
export function Member({ imgUrl, name, designation }: MemberProps) {
  return (
    <Box>
      <Image
        style={{
          borderRadius: "100%",
        }}
        src={imgUrl}
        alt={name}
        width={180}
        height={180}
      />
      <Title order={2} mt="md" color="brand">
        {name}
      </Title>
      <Center>
        <Title order={4} maw={400} size={"md"} weight={600}>
          {designation}
        </Title>
      </Center>
    </Box>
  );
}
