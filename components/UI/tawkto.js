"use client";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import tawkMessengerReactUmd from "@tawk.to/tawk-messenger-react";

export default function TawkTo() {
  const defaultHandler = () => {};
  return (
    <TawkMessengerReact
      propertyId="66e1f400ea492f34bc11b108"
      widgetId="default"
      onBeforeLoad={defaultHandler}
      onChatStarted={defaultHandler}
      onChatEnded={defaultHandler}
      onOfflineSubmit={defaultHandler}
      onChatMinimized={defaultHandler}
      onChatMaximized={defaultHandler}
      onLoad={defaultHandler}
      onStatusChange={defaultHandler}
      onChatMessage={defaultHandler}
      onError={defaultHandler}
      onWidgetVisible={defaultHandler}
      onWidgetHidden={defaultHandler}
      onUnreadCountChanged={defaultHandler}
      onChatMessageVisitor={defaultHandler}
      onAgentJoinChat={defaultHandler}
      onChatMessageAgent={defaultHandler}
      onAgentLeaveChat={defaultHandler}
    />
  );
}
