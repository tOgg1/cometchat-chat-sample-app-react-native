import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  CometChatMessages,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";

export const Chat: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [otherUser, setOtherUser] = useState<CometChat.User | null>(null);

  const login = useCallback(() => {
    // Log in to cometchat
    CometChatUIKit.login({ uid: "superhero1" })
      .then(() => {
        setLoggedIn(true);
        // Get other user, superhero2

        CometChat.getUser("superhero2")
          .then((user) => {
            setOtherUser(user);
          })
          .catch((error) => {
            console.log("Error while getting superhero2", error);
          });
      })
      .catch((error) => {
        console.log("Error while logging in", error);
      });
  }, []);

  return (
    <View style={{ height: "100%" }}>
      {loggedIn && otherUser ? (
        <CometChatMessages user={otherUser} hideMessageHeader={true}/>
      ) : (
        <TouchableOpacity onPress={login}>
          <Text>Log in</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
