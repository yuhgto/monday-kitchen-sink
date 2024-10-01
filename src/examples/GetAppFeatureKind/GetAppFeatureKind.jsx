const actionAppFeatures = [
    "AppFeatureItemBatchAction",
    "AppFeatureItemMenuAction",
    "AppFeatureAiBoardMainMenuHeader",
    "AppFeatureAiItemUpdateActions",
    "AppFeatureGroupMenuAction",
  ]
  
  const viewAppFeatures = [
    "AppFeatureObject",
    "AppFeatureItemView",
    "AppFeatureDashboardWidget",
    "AppFeatureBoardView",
    "AppFeatureAccountSettingsView",
  ]
  
  const appFeatureNames = {
    "AppFeatureObject": "Object",
    "AppFeatureItemView": "Item view",
    "AppFeatureDashboardWidget": "Dashboard widget",
    "AppFeatureBoardView": "Board view",
    "AppFeatureItemBatchAction": "Board multi item menu",
    "AppFeatureItemMenuAction": "Board item menu",
    "AppFeatureAiBoardMainMenuHeader": "Board header AI assistant",
    "AppFeatureAiItemUpdateActions": "Update AI assistant",
    "AppFeatureAccountSettingsView": "Account settings view",
    "AppFeatureGroupMenuAction": "Board group menu",
  }
  
  const FeatureInfoBox = ({ featureType }) => {
    const [isClosed, setIsClosed] = useState(false);
    const featureCategory = _.includes(actionAppFeatures, featureType) ? "Action" : "View"
    const featureTitle = appFeatureNames[featureType]; // does this work?
    const handleAttentionBoxClose = () => {
      setIsClosed(true);
    }
  
    return (
      (!isClosed) ?
        <AttentionBox compact title={`Current feature: ${featureTitle}`} className="featureInfoBox">
          <Flex gap={Flex.gaps.SMALL} wrap>
            {`Category - ${featureCategory}`}<br/>
            {`Key - ${featureType}`}
            {/* Feature name: <Chips label={featureTitle} readOnly showBorder /><br/>
            Feature category: <Chips label={featureCategory} readOnly showBorder />
            <Chips label={featureType} showBorder readOnly /> */}
          </Flex>
        </AttentionBox> : <></>
    )
  }