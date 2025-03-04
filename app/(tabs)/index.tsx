import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import CreateHabit from "../drawers/create-habit";
import EditHabit from "../drawers/edit-habit";
import { useState } from "react";
import OnboardingOne from "../onboarding/onboarding-one";


export default function Habits() {
  const [isOnboarded, setIsOnboarded] = useState(false)
  return (<>
    {!isOnboarded ? (<OnboardingOne />) : (<ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="list.bullet"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Habits</ThemedText>
      </ThemedView>
      <CreateHabit />
      <EditHabit />
    </ParallaxScrollView>)}
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
