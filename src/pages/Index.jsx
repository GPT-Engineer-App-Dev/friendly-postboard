import { useState } from "react";
import { Container, VStack, Box, Text, Input, Button, HStack, IconButton, Flex } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown, FaLaugh, FaSadTear } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, { text: newPost, reactions: { like: 0, dislike: 0, laugh: 0, sad: 0 } }]);
      setNewPost("");
    }
  };

  const addReaction = (index, reaction) => {
    const updatedPosts = [...posts];
    updatedPosts[index].reactions[reaction]++;
    setPosts(updatedPosts);
  };

  return (
    <Container maxW="container.md" py={4}>
      <Box as="header" width="100%" py={4} borderBottom="1px" borderColor="gray.200" mb={4}>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">Public Postboard</Text>
      </Box>
      <VStack spacing={4}>
        <Box width="100%">
          <Input
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            mb={2}
          />
          <Button colorScheme="blue" onClick={addPost} width="100%">Post</Button>
        </Box>
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text mb={2}>{post.text}</Text>
            <HStack spacing={4}>
              <IconButton
                aria-label="Like"
                icon={<FaThumbsUp />}
                onClick={() => addReaction(index, "like")}
              />
              <Text>{post.reactions.like}</Text>
              <IconButton
                aria-label="Dislike"
                icon={<FaThumbsDown />}
                onClick={() => addReaction(index, "dislike")}
              />
              <Text>{post.reactions.dislike}</Text>
              <IconButton
                aria-label="Laugh"
                icon={<FaLaugh />}
                onClick={() => addReaction(index, "laugh")}
              />
              <Text>{post.reactions.laugh}</Text>
              <IconButton
                aria-label="Sad"
                icon={<FaSadTear />}
                onClick={() => addReaction(index, "sad")}
              />
              <Text>{post.reactions.sad}</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;